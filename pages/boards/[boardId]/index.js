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

// export const getServerSideProps = () => {
//     // 만약 서버사이드 렌더링을 하는 페이지라면?? 
//     //      => out 폴더로 생성 불가
//     //      => 이런 경우, next.config.js에서 exportPathMap으로 현재페이지 제외시키기
// }