import { Injectable, OnModuleInit, Inject, HttpException } from '@nestjs/common'
import { Observable } from 'rxjs'
import { ClientGrpc } from '@nestjs/microservices'

import { type UserOutput } from '#/common/types/outputs/user'

interface HeroService {
  getUsers(args: any): Observable<any>
  getUserById(args: any): Observable<any>
  getUserByEmail(args: any): Observable<any>
  getUserByUsername(args: any): Observable<any>
}

@Injectable()
export class UserAdapterService implements OnModuleInit {
  private heroService: HeroService
  constructor(@Inject('HERO_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.heroService = this.client.getService<HeroService>('HeroService')
  }

  async getUsers(): Promise<UserOutput[]> {
    const { users } = await new Promise<{ users: UserOutput[] }>(
      (resolve, reject) => {
        this.heroService.getUsers({}).subscribe({
          error(error) {
            reject(error)
          },
          next(value) {
            resolve(value)
          }
        })
      }
    )
    return users
  }

  async getUserById(id: string): Promise<UserOutput> {
    const { user } = await new Promise<{ user: UserOutput }>(
      (resolve, reject) => {
        this.heroService.getUserById({ id }).subscribe({
          error(error) {
            reject(error)
          },
          next(value) {
            resolve(value)
          }
        })
      }
    )

    if (!user) {
      throw new HttpException('Smile você quer error assim', 400)
    }

    return user
  }

  async getUserByEmail(email: string): Promise<UserOutput> {
    const { user } = await new Promise<{ user: UserOutput }>(
      (resolve, reject) => {
        this.heroService.getUserByEmail({ email }).subscribe({
          error(error) {
            reject(error)
          },
          next(value) {
            resolve(value)
          }
        })
      }
    )

    return user
  }

  async getUserByUsername(username: string): Promise<UserOutput> {
    const { user } = await new Promise<{ user: UserOutput }>(
      (resolve, reject) => {
        this.heroService.getUserByUsername({ username }).subscribe({
          error(error) {
            reject(error)
          },
          next(value) {
            resolve(value)
          }
        })
      }
    )

    return user
  }
}
