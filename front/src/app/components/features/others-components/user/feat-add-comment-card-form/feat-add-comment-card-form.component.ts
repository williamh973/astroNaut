import { Component, Input } from '@angular/core';
import { catchError, of } from 'rxjs';
import { NewsCard } from 'src/app/models/cards/news-card.model';
import { CommentCard } from 'src/app/models/cards/comment-card.model';
import { CommentCardService } from 'src/app/shared/services/cards/comment-card/comment-card.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-feat-add-comment-card-form',
  templateUrl: './feat-add-comment-card-form.component.html',
  styleUrls: ['./feat-add-comment-card-form.component.scss'],
})
export class FeatAddCommentCardFormComponent {
  @Input() newsCard!: NewsCard;
  commentCard: CommentCard = new CommentCard(
    '',
    new NewsCard(
      [],
      '',
      '',
      '',
      '',
      '',
      0,
      new Date(),
      0,
      0,
      [],
      new User('', '', 'ROLE_ADMIN', false, [], [])
    ),
    new Date(),
    0,
    0
  );
  isLoadingComposantActive: boolean = false;
  isCommentCreatedSuccess: boolean = false;
  isCommentCreatedError: boolean = false;
  isContentInputNotEmpty: boolean = false;

  constructor(private commentCardService: CommentCardService) {}

  onSubmit() {
    this.isLoadingComposantActive = true;
    this.onCreateComment();
  }

  onCheckCommentInputReady() {
    return (
      this.commentCard.content.length >= 1 &&
      this.commentCard.content.length <= 1000
    );
  }

  private onCreateComment() {
    if (this.newsCard.id !== null) {
      this.commentCardService
        .createComment(this.commentCard, this.newsCard)
        .pipe(
          catchError(() => {
            this.isLoadingComposantActive = false;
            this.isCommentCreatedError = true;

            setTimeout(() => {
              this.isCommentCreatedError = false;
            }, 3000);
            return of(null);
          })
        )
        .subscribe((success) => {
          this.isLoadingComposantActive = false;
          this.isCommentCreatedSuccess = true;

          setTimeout(() => {
            this.isCommentCreatedSuccess = false;
            this.commentCard.content = '';
          }, 3000);
        });
    }
  }
}
