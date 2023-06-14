export function Grade({gradeData}) {

  return (
    <>
      <div>
        <b>{gradeData.title}:</b><span >{gradeData.value}</span>
        <i>"{gradeData.comment}"</i>
      </div>
    </>
  )
}