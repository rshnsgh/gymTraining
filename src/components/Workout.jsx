import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

const Workout = (props) => {
  const {workout} = props
  return (
    <SectionWrapper id={'workoutt'} header={"welcome to"}
      title={['The', 'DANGER', 'zone']}>
        <div className='flex flex-col gap-4'>
          {workout.map((exercise, i) => {
            return (
              <ExerciseCard exercise={exercise} i={i} key={i}/>
            )
          })}
        </div>
      </SectionWrapper>
  )
}

export default Workout