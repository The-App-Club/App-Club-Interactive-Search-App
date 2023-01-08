import { AxiosResponse, isAxiosError } from 'axios'

import { Film } from '@/features/film/domains/film'
import { FilmFactory } from '@/features/film/factory'
import { FilmData, FilmsData } from '@/features/film/types'
import { axios } from '@/libs/axios'
import { ErrorData } from '@/types/error'

export class FilmRepository implements FilmFactory {
  async find({ id }: Pick<Film, 'id'>): Promise<FilmData> {
    try {
      console.log(id)
      const response: AxiosResponse<FilmData, ErrorData> = await axios.get(
        `/api/films/${id}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'get',
        }
      )
      const { data } = response
      console.log(data)
      return data
    } catch (error: any) {
      if (isAxiosError(error)) {
        throw error
      }
      throw error
    }
  }
  async listUp(): Promise<FilmsData> {
    try {
      const response: AxiosResponse<FilmsData, ErrorData> = await axios.get(
        `/api/films`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'get',
        }
      )
      const { data } = response
      console.log(data)
      return data
    } catch (error: any) {
      if (isAxiosError(error)) {
        throw error
      }
      throw error
    }
  }
}
