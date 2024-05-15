import { Component, Input } from '@angular/core';
import { Comments } from 'src/app/models/comment.model';
import { CommentService } from 'src/app/shared/services/comment.service';

@Component({
  selector: 'app-feat-comment',
  templateUrl: './feat-comment.component.html',
  styleUrls: ['./feat-comment.component.scss']
})
export class FeatCommentComponent {

@Input() comment!: Comments;

  isCommentLiked: boolean = false;
  isCommentDisliked: boolean = false;

  constructor(
    private commentService: CommentService
    ) {}

    ngOnInit() {
      
    }


    onLikeThisComment() {
      this.isCommentLiked = !this.isCommentLiked;
      
      if (this.isCommentLiked && this.comment.dislikeCount === 0) {
        this.isCommentDisliked = false;
        this.comment.likeCount++;
        this.commentService.updateComment(this.comment).subscribe();
      } else if (this.isCommentLiked && this.comment.dislikeCount > 0) { 
        this.isCommentDisliked = false;
        this.comment.likeCount++;
        this.comment.dislikeCount--;
        this.commentService.updateComment(this.comment).subscribe();
      }
  
      if (!this.isCommentLiked && this.comment.likeCount > 0) {
        this.comment.likeCount--;
        this.commentService.updateComment(this.comment).subscribe();
      } 
    }
   
    onDislikeThisComment() {
      this.isCommentDisliked = !this.isCommentDisliked;
  
      if (this.isCommentDisliked && this.comment.likeCount === 0) {
        this.isCommentLiked = false;
        this.comment.dislikeCount++;
        this.commentService.updateComment(this.comment).subscribe();
      } else if (this.isCommentDisliked && this.comment.likeCount > 0) { 
        this.isCommentLiked = false;
        this.comment.dislikeCount++;
        this.comment.likeCount--;
        this.commentService.updateComment(this.comment).subscribe();
      } 
  
      if (!this.isCommentDisliked && this.comment.dislikeCount > 0) {
        this.comment.dislikeCount--;
        this.commentService.updateComment(this.comment).subscribe();
      } 
    }
  
  }
  
