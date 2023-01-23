using AutoMapper;
using backend.Entities;
using backend.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories
{
    public class MessagesRepository : IMessagesRepository
    {
        private readonly FitCateringContext db;
        private readonly IMapper mapper;

        public MessagesRepository(FitCateringContext _db, IMapper _mapper)
        {
            db = _db;
            mapper = _mapper;

        }
        public async Task<ActionResult<Message>> addMessage(Message comment)
        {
            db.Messages.Add(comment);
            await db.SaveChangesAsync();
            return comment;
        }

        public async Task<IEnumerable<Message>> getAllMessages()
        {
            return await db.Messages.ToListAsync();
        }

        public Task<Message?> getMessageById(int id)
        {
            return db.Messages.FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
