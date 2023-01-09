using AutoMapper;
using backend.Entities;
using backend.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories
{
    public class CommentsRepository : ICommentsRepository
    {
        private readonly FitCateringContext db;
        private readonly IMapper mapper;

        public CommentsRepository(FitCateringContext _db, IMapper _mapper)
        {
            db = _db;
            mapper = _mapper;

        }
        public async Task<ActionResult<Comment>> addComment(Comment comment)
        {
            await db.Comments.AddAsync(comment);
            await db.SaveChangesAsync();
            return comment;
        }

        public async Task<ActionResult<Comment?>> deleteComment(int id)
        {
            var comment = await db.Comments.FirstOrDefaultAsync(c => c.Id == id);
            if (comment != null) 
            {
                db.Comments.Remove(comment);
                await db.SaveChangesAsync();
            }
            return comment;
        }

        public async Task<IEnumerable<Comment>> getAllComments()
        {
            return await db.Comments.ToListAsync();
        }

        public async Task<Comment?> getCommentById(int id)
        {
            return await db.Comments.FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
