using backend.DTO;
using backend.Entities;
using backend.Interfaces;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : Controller
    {
        private readonly ICommentsRepository commentRepository;

        public CommentsController(ICommentsRepository commentRepository)
        {
            this.commentRepository = commentRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Comment>> GetComments()
        {
            return await commentRepository.getAllComments();
        }

        [HttpGet("{id}")]
        public async Task<Comment?> GetComment(int id)
        {
            return await commentRepository.getCommentById(id);
        }

        [HttpPost]
        public async Task<ActionResult<Comment>> AddComment([FromBody] Comment comment)
        {
            return await commentRepository.addComment(comment);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Comment?>> DeleteComment(int id)
        {
            return await commentRepository.deleteComment(id);
        }
    }
}