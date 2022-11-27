import {
  Model,
  Table,
  Column,
  DataType,
  HasMany,
  PrimaryKey,
} from 'sequelize-typescript';
import { Blog } from '../../blogs/entity/blog.entity';

@Table
export class User extends Model {
  @PrimaryKey
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ type: DataType.TEXT, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  password: string;

  @Column({ type: DataType.STRING, allowNull: false })
  username: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  profileImg: string;

  @HasMany(() => Blog)
  blogs: Blog[];
}
