
/* ---- DOESN'T WORK    ReferenceError: expect is not defined

import '@testing-library/jest-dom'

import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import { GradeList } from '../src/grades/GradeList'
import { expect } from 'vitest'

test('Displays grade list', () => {
  render(<GradeList></GradeList>)
  expect(screen.getByText("Not here")).toBeNull()
})
*/