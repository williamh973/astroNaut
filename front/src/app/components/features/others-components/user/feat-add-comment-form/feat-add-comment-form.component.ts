import { Component, Input } from '@angular/core';
import { catchError, of } from 'rxjs';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { Comments } from 'src/app/models/comment.model';
import { CommentService } from 'src/app/shared/services/comment.service';


@Component({
  selector: 'app-feat-add-comment-form',
  templateUrl: './feat-add-comment-form.component.html',
  styleUrls: ['./feat-add-comment-form.component.scss']
})
export class FeatAddCommentFormComponent {

  @Input() newsCard!: NewsCard;
  comment: Comments = new Comments("", new NewsCard([], "", "", "", "", "", 0, new Date, 0, 0, []), new Date, 0, 0);
  isLoadingComposantActive: boolean = false;
  isCommentCreatedSuccess: boolean = false;
  isCommentCreatedError: boolean = false;
  isContentInputNotEmpty: boolean = false;


  constructor(private commentService: CommentService) {}


  ngOnInit() {

  }

  onSubmit() {
    this.isLoadingComposantActive = true;
    this.onCreateComment();
  }

  onCheckCommentInputReady() {
    return (
      this.comment.content.length >= 1 &&
      this.comment.content.length <= 1000
      );
  }

  private onCreateComment() {
    if (this.newsCard.id !== null) {
      this.commentService.createComment(this.comment, this.newsCard)
      .pipe(
        catchError(
          () => {
            this.isLoadingComposantActive = false;
            this.isCommentCreatedError = true;
          
          setTimeout(() => {
            this.isCommentCreatedError = false;
          }, 3000);
          return of(null);
        })
        ).subscribe(
        (success) => {
          this.isLoadingComposantActive = false;
          this.isCommentCreatedSuccess = true;
          
          setTimeout(() => {
            this.isCommentCreatedSuccess = false;
          }, 3000);
        }, 
        );
      }
    }

  }
