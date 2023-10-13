// "use client"

import Link from "next/link"

type NextPage<
  PathParams extends Record<string, string> = {
    [K in string]: string
  },
  SearchParams extends Record<string, string> = {
    [K in string]: string
  },
> = (arg: { params: PathParams; searchParams: SearchParams }) => React.ReactNode

type Params = {
  userId: string
}

const Page: NextPage<Params> = ({ params: { userId } }) => {
  return (
    <div>
      <h1>ユーザー詳細ページ ({userId})</h1>

      <Link href={`/users/${Number.parseInt(userId) + 1}`}>++</Link>
    </div>
  )
}

export default Page

export function generateStaticParams() {
  return [{ userId: "1" }] satisfies ReadonlyArray<Params>
}
