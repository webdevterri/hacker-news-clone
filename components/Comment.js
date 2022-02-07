export default function Comment(comment) {
  // console.log(comment);
  const hasNestedComments = comment.comments.length > 0;

  return `
    <div class="nested-comments-${comment.level}">
        <p class="comment-header">
        ${comment.user} | ${comment.time_ago}
        </p>
        ${comment.content}
        ${
          hasNestedComments
            ? comment.comments.map((comment) => Comment(comment)).join("")
            : ""
        }
    </div>`;
}
// The above is called "recursion" (to keep calling the function and iterating) as we do with the comments to see if there are nested comments.
