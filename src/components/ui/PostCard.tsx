import Chip from "@/components/ui/Chip";
import Heading from "@/components/ui/Heading";
import { BlogPost } from "@/types/blog";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 * @param {boolean} big changes layout of the card.
 */

function PostCard({
  className,
  post,
  big,
}: {
  className?: string;
  post: BlogPost;
  big?: boolean;
}) {
  return (
    <>
      <article
        className={`${className} ${big && "max-h-[370px] self-center border-b border-t border-main-grey-700"}`}
      >
        {post.content.image && (
          <Chip className={`mb-4 ${big && "mt-4"}`}>{post.tag}</Chip>
        )}
        <figure className={`group ${!big && "border-t border-main-grey-700"}`}>
          {post.content.image && !big && (
            <Image
              src={post.content.image}
              alt="Blog image"
              className="my-6 w-full group-hover:drop-shadow-xl"
            />
          )}
          <div className={`${big && "flex flex-col justify-between"}`}>
            <Heading>
              <h3
                className={`${big ? "mb-[118px] text-[40px] leading-[50px] -tracking-[0.56px]" : "mb-6 text-lg md:leading-[42px] md:-tracking-[0.44px] lg:text-2xl xl:text-[32px]"}`}
              >
                <Link href="#">{post.title}</Link>
              </h3>
            </Heading>
            <p className={`flex justify-between ${big && "mb-4"}`}>
              <span>
                <span className="text-xs font-medium md:text-base">
                  {formatDate(post.date)}
                </span>
                <span className="text-xs font-medium text-main-grey-700 md:text-base">
                  , by {post.content.quote.author}
                </span>
              </span>
              {!post.content.image && <Chip className="mb-4">{post.tag}</Chip>}
            </p>
          </div>
        </figure>
      </article>
      {big && (
        <Image
          src={post.content.image}
          alt="Blog image"
          className="col-start-6 col-end-12 my-6 group-hover:drop-shadow-xl"
        />
      )}
    </>
  );
}

export default PostCard;
