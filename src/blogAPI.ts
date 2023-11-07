import { notFound } from "next/navigation";
import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  // Next.js13になり、記述方法が変わった(getServerSidePropsを書かない。)
  //詳しくはnext.js fetchで検索。
  // ブログの情報を取得は更新頻度が高いため、今回はSSRを使う
  const res = await fetch(`http://localhost:3005/posts`, { cache: "no-store" }); //SSR SSG→ force-cache

  if (!res.ok) {
    throw new Error("エラーが発生しました。");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const articles = await res.json(); //シリアライズ、データを文字列化することができる（軽量化）
  return articles;
};

export const getDetailArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3005/posts/${id}`, {
    next: { revalidate: 60 },
  }); //ISR Next.js13 revalidate

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("エラーが発生しました。");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const article = await res.json();
  return article;
};

// 投稿用API
export const createArticle = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  const currentDatetime = new Date().toISOString();

  const res = await fetch(`http://localhost:3005/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, title, content, createdAt: currentDatetime }),
  }); //ISR Next.js13 revalidate

  if (!res.ok) {
    throw new Error("エラーが発生しました。");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newArticle = await res.json();
  return newArticle;
};

export const deleteArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3005/posts/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("エラーが発生しました。");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const deleteArticle = await res.json();
  return deleteArticle;
};
