// import { supabase } from "@/utils/supabaseClient";
import ArticleList from "./components/ArticleList";
// import { getAllArticles } from "@/blogAPI";

export default async function Home() {
  // const articles = await getAllArticles();
  // console.log(supabase);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${API_URL}/api/blog`, { cache: "no-store" });
  const articles = await res.json();
  // console.log(articles);
  // console.log(res);

  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        <ArticleList articles={articles} />
      </section>

      <aside className="w-full md:w-1/3 flex flex-col items-center px-3 md:pl-6">
        <div className="bg-white shadow-md rounded p-4 mb-6 mt-4">
          <h3 className="font-bold text-gray-900 mb-2">About</h3>
          <p className="text-gray-600">
            このブログは私の日常の一部を共有できたらと思い、作成しました。
            <br />
            少しでもいいので見ていただけると幸いです。
          </p>
        </div>
        {/* カテゴリーを追加・クリックして遷移 */}
        {/* <div className="bg-white shadow-md rounded p-4 mb-6 mt-4 w-full">
          <h3 className="font-bold text-gray-900 mb-2">Category</h3>
          <ul className="text-gray-600 mt-2">
            <li>
              <a href="#">Technology</a>
            </li>
            <li>
              <a href="#">Automotive</a>
            </li>
            <li>
              <a href="#">Finance</a>
            </li>
            <li>
              <a href="#">Sports</a>
            </li>
          </ul>
        </div> */}
      </aside>
    </div>
  );
}
