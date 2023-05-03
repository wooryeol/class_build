import { useRouter } from "next/router"

export default function BoardsPage() {
    const router = useRouter()

    return (
        <>
            <div>안녕하세요 여기는 게시판 동적페이지입니당🐥</div>
            <div>게시글 아이디: {router.query.boardId}</div>
        </>
    )
}