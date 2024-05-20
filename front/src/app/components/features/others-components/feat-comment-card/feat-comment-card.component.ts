import { Component, Input } from '@angular/core';
import { CommentCard } from 'src/app/models/cards/comment-card.model';
import { CommentCardService } from 'src/app/shared/services/cards/comment-card/comment-card.service';

@Component({
  selector: 'app-feat-comment-card',
  templateUrl: './feat-comment-card.component.html',
  styleUrls: ['./feat-comment-card.component.scss']
})
export class FeatCommentCardComponent {

@Input() commentCard!: CommentCard;


  isCommentLiked: boolean = false;
  isCommentDisliked: boolean = false;

  constructor(
    private commentCardService: CommentCardService
    ) {}


    onLikeThisComment() {
      this.isCommentLiked = !this.isCommentLiked;
      
      if (this.isCommentLiked && this.commentCard.dislikeCount === 0) {
        this.isCommentDisliked = false;
        this.commentCard.likeCount++;
        this.commentCardService.updateComment(this.commentCard).subscribe();
      } else if (this.isCommentLiked && this.commentCard.dislikeCount > 0) { 
        this.isCommentDisliked = false;
        this.commentCard.likeCount++;
        this.commentCard.dislikeCount--;
        this.commentCardService.updateComment(this.commentCard).subscribe();
      }
  
      if (!this.isCommentLiked && this.commentCard.likeCount > 0) {
        this.commentCard.likeCount--;
        this.commentCardService.updateComment(this.commentCard).subscribe();
      } 
    }
   
    onDislikeThisComment() {
      this.isCommentDisliked = !this.isCommentDisliked;
  
      if (this.isCommentDisliked && this.commentCard.likeCount === 0) {
        this.isCommentLiked = false;
        this.commentCard.dislikeCount++;
        this.commentCardService.updateComment(this.commentCard).subscribe();
      } else if (this.isCommentDisliked && this.commentCard.likeCount > 0) { 
        this.isCommentLiked = false;
        this.commentCard.dislikeCount++;
        this.commentCard.likeCount--;
        this.commentCardService.updateComment(this.commentCard).subscribe();
      } 
  
      if (!this.isCommentDisliked && this.commentCard.dislikeCount > 0) {
        this.commentCard.dislikeCount--;
        this.commentCardService.updateComment(this.commentCard).subscribe();
      } 
    }
  
  }
  
