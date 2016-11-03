import { expect } from 'chai'
import * as sinon from 'sinon'

import Cat from '../src/lib/Cat'

describe('Cat', function () {
  let cat: Cat
  let consoleSpy: Sinon.SinonSpy

  beforeEach(function () {
    cat = new Cat()
  })

  describe('say', function () {

    beforeEach(function () {
      consoleSpy = sinon.spy(console, 'log')
    })

    afterEach(function () {
      sinon.restore(console.log)
    })

    it('should log out what the cat is saying', function () {
      cat.say()

      expect(consoleSpy.calledOnce).to.be.true
    })

    it('should say meeeooow', function () {
      const result = 'meeeooow'

      cat.say()

      expect(consoleSpy.calledWith(result)).to.be.true
    })
  })
})
