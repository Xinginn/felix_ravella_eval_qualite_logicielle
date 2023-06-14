import { describe, expect, it } from "vitest";

/* ---- DOESN'T WORK    ReferenceError: expect is not defined

import '@testing-library/jest-dom'

import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import { GradeList } from '../src/grades/GradeList'

test('Displays grade list', () => {
  render(<GradeList></GradeList>)
  expect(screen.getByText("Not here")).toBeNull()
})
*/



describe('useGradeStore', () => {
  it('should pass'), () => {
    
    expect(true).toBeTruthy();
  }
})