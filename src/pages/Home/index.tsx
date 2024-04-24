import { Play } from 'phosphor-react'
import * as S from './styles'
import { useForm } from 'react-hook-form'

export function Home() {
  const { register, handleSubmit, watch } = useForm()

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  const task = watch('task')

  const isSubmitDisable = !task

  return (
    <S.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <S.TaskInput
            id="task"
            list="task-suggestion"
            placeholder="De um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestion">
            <option value="Teste 1" />
            <option value="Teste 2" />
            <option value="Teste 3" />
            <option value="aaaaaa 4" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <S.MinutesInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...(register('minutesAmount'), { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </S.FormContainer>

        <S.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <S.Separator>:</S.Separator>
          <span>0</span>
          <span>0</span>
        </S.CountdownContainer>

        <S.StartCountdownButton disabled={isSubmitDisable} type="submit">
          <Play size={24} />
          Começar
        </S.StartCountdownButton>
      </form>
    </S.HomeContainer>
  )
}
