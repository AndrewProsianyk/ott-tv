import { getReviewDetailsById } from "@/app/utils/fetchMedia";
import { Review } from "@/app/utils/types";
import Image from "next/image";
import React from "react";
import RatingStars from "../starsRate/RatingStars";
import styles from "./ReviewItem.module.scss";

type ReviewProps = {
  reviewId: number;
};

export default async function ReviewItem({ reviewId }: ReviewProps) {
  const review = await getReviewDetailsById(reviewId);

  if (!review) {
    return <div>Review not found</div>;
  }

  const rating = review.author_details.rating;
  const formattedDate = new Intl.DateTimeFormat("en-US").format(
    new Date(review.created_at)
  );

  return (
    <div className={styles.review}>
      <p className={styles.name}>{review.author}</p>
      <div className="flex gap-5 mb-8">
        <p className={styles.date}>{formattedDate}</p>
        {rating && <RatingStars rating={rating} />}
      </div>
      <p className={styles.content}>{review.content}</p>
    </div>
  );
}
// const avatarPath = await review.author_details.avatar_path;
// const avatarUrl = `https://image.tmdb.org/t/p/w200${avatarPath}`;
{
  /* <Image src={avatarUrl} width={200} height={200} alt="Reviewer avatar" /> */
}
