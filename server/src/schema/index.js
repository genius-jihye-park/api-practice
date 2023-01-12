import { gql } from 'apollo-server-express'
import messageSchema from './message.js'
import userSchema from './user.js'

const linkSchema = gql`
    type Query {
        : Boolean
    }
    type Mutation {
        : Boolean
    }
`

export default [linkSchema, userSchema, messageSchema]