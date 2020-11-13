import {
	Column,
	CreatedAt,
	DeletedAt,
	Model,
	PrimaryKey,
	Table,
	UpdatedAt,
} from "sequelize-typescript";

// https://github.com/RobinBuschmann/sequelize-typescript#table
@Table
export class User extends Model<User> {
	// using "!" tells TypeScript that the property will be defined somewhere else
	// https://github.com/RobinBuschmann/sequelize-typescript#column
	@PrimaryKey
	@Column
	readonly id!: number;

	@Column
	firstName!: string;

	@Column
	lastName!: string;

	// CreatedAt, UpdatedAt, and DeletedAt all create db columns
	// https://github.com/RobinBuschmann/sequelize-typescript#createdat-updatedat-deletedat
	@CreatedAt
	readonly creationDate!: Date;

	@UpdatedAt
	readonly updatedOn!: Date;

	@DeletedAt
	readonly deletionDate!: Date;

	// fullName is not a database column
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

// This is required for sequelize-typescript to auto load this file
export default User;
