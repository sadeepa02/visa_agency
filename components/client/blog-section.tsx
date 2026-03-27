import { Button } from "@/components/ui/button"
import { Card, CardContent } from "../ui/card"
import Link from "next/link"
import Image from "next/image"
// import { db } from "@/db"
// import { blogs } from "@/db/schema"
import { selectBlogSchemaType } from "@/lib/zod-schemas"

export default async function BlogSection() {
  // const posts = await db.select({
  //   id: blogs.id,
  //   title: blogs.title,
  //   content: blogs.content,
  //   image: blogs.image
  // }).from(blogs).orderBy(blogs.createdAt).limit(3)

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 mb-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-5xl">
            Stay updated with our latest blogs
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore the best study destinations in the world! Learn all about the countries&apos; top universities, scholarships, cost of living, post-study work rights and more.
        </p>
      </div>
      
      {/* <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <StudyDestinationCard
            key={post.title}
            post={post}      
          />
        ))}
      </div> */}

      <div className="mt-4 text-center">
        <Button 
          className="mt-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium px-6 h-10 rounded-lg shadow-md transition-all duration-300"
          asChild
        >
          <Link href="/blogs">
            Explore Our Blogs
          </Link>
        </Button>
      </div>
    </section>
  )
}
  
  export function StudyDestinationCard({ post }: { post: selectBlogSchemaType }) {
    return (
      <Card className="overflow-hidden border-none shadow-md">
        <div className="aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src={post.image}
            alt={`${post.title} image`}
            width={400}
            height={300}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="px-1 pt-4">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p className="truncate">{post.content}</p>
          <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium rounded-lg shadow-md transition-all duration-300">
            <Link 
              href={{
                pathname: `/blogs/${post.id}`,
                query: { postData: JSON.stringify(post) }}}
              className="mt-2 inline-flex items-center"
            >
              Learn more &gt;
            </Link>
          </Button>
        </CardContent>
      </Card>
    )
  }
  
  

