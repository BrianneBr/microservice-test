import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, BeforeUpdate } from "typeorm";

//
// https://github.com/typeorm/typeorm
//

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	readonly id!: number;

	@Column()
	firstName!: string;

	@Column()
	lastName!: string;

	@Column({
		nullable: true,
	})
	email?: string;

	//
	// The following stuff can be used to automatically include timestamps
	//
	@Column({ default: () => Date.now() })
	public dateCreated!: number;

	@Column({ name: "updated_at", nullable: true })
	public dateUpdated!: number;

	@BeforeUpdate()
	public setUpdatedAt() {
		this.dateUpdated = Date.now();
	}
}