import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDir = join(process.cwd(), '_posts')