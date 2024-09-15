import ExerciseCard from "./ExerciseCard"
import SectionWrapper from "./SectionWrapper"

export default function Workout(props) {

  const {workout} = props
    
  return (
    <SectionWrapper id={'workout'} header={"Welcome To Danger Zone"} title={['The', 'DANGER', 'Zone']}>
        <div className="flex flex-col gap-4">
            {workout.map((exercise, i) => {
              return (
                <ExerciseCard i={i} exercise={exercise} key={i}>

                </ExerciseCard>
              )
            })}
        </div>
      </SectionWrapper>
  )
}
