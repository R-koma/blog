import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div>
      <article className="shadow my-4 flex flex-col">
        <Link href={`articles/${article.id}`} className="hover:opacity-75">
          <Image
            src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
            alt=""
            width={1280}
            height={300}
            priority
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            {article.id}
          </Link>
          <Link
            href={`articles/${article.id}`}
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            {article.title}
          </Link>
          <p className="text-sm pb-3 text-slate-900">{article.createdAt}</p>
          <Link href={`articles/${article.id}`} className="text-slate-900 pb-6">
            {article.content && article.content.length > 70
              ? article.content.substring(0, 70) + "..."
              : article.content || "空白です。"}
          </Link>
          <Link
            href={`articles/${article.id}`}
            className="text-blue-900 hover:text-black uppercase"
          >
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;
