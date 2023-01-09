using backend.DTO;
using backend.Entities;
using Microsoft.AspNetCore.Mvc;

namespace backend.Interfaces
{
    public interface ICommentsRepository
    {
        Task<IEnumerable<Comment>> getAllComments();
        Task<Comment?> getCommentById(int id);
        Task<ActionResult<Comment>> addComment(Comment comment);
        Task<ActionResult<Comment?>> deleteComment(int id);
    }
}
