using backend.Entities;
using Microsoft.AspNetCore.Mvc;

namespace backend.Interfaces
{
    public interface IMessagesRepository
    {
        Task<ActionResult<Message>> addMessage(Message comment);
        Task<IEnumerable<Message>> getAllMessages();
        Task<Message?> getMessageById(int id);
    }
}
