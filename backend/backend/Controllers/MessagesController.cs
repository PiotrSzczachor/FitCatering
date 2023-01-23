using backend.Entities;
using backend.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : Controller
    {
        private readonly IMessagesRepository messageRepository;

        public MessagesController(IMessagesRepository messageRepository)
        {
            this.messageRepository = messageRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Message>> GetMessages()
        {
            return await messageRepository.getAllMessages();
        }

        [HttpGet("{id}")]
        public async Task<Message?> GetMessage(int id)
        {
            return await messageRepository.getMessageById(id);
        }

        [HttpPost]
        public async Task<ActionResult<Message>> AddMessage([FromBody] Message message)
        {
            return await messageRepository.addMessage(message);
        }
    }
}
