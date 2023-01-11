import { gql } from 'apollo-server-express'
import messageSchema from './message'
import userSchema from './user'

const linkSchema = gql`
    type Query {
        : Boolean
    }
    type Mutation {
        : Boolean
    }
`

export default [linkSchema, userSchema, messageSchema]