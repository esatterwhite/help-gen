'use strict'

const test = require('tap').test
const utils = require('../lib/utils')
const Prop = require('@helpdotcom/nano-prop')

test('isValidIdentifier', (t) => {
  const v = utils.isValidIdentifier
  const tests = new Map([
    ['test', true]
  , ['room-id', false]
  , ['_room-id', false]
  , ['room id', false]
  , ['7632342fds', false]
  , ['room_id', true]
  , ['room_$id', true]
  , ['room_#id', false]
  ])

  for (const [name, val] of tests) {
    t.equal(v(name), val, name)
  }
  t.end()
})

test('cleanPath', (t) => {
  const clean = utils.cleanPath
  const tests = new Map([
    ['a', 'a']
  , ['fasdfds', 'fasdfds']
  , ['fd.^__IDX__', 'fd']
  , ['fd.^__IDX__.items.^__IDX__1', 'fd.items[i]']
  , ['fd.^__IDX__.items.^__IDX__1.a.^__IDX__2', 'fd.items[i].a[j]']
  ])

  for (const [name, val] of tests) {
    t.equal(clean(name), val, name)
  }
  t.end()
})

test('getIsFunctionName', (t) => {
  t.throws(() => { return utils.getIsFunctionName('foobar') },
           /Invalid type: "foobar"/)
  t.end()
})

test('callbackSuccess', (t) => {
  t.throws(() => { return utils.callbackSuccess() },
           /"args" must be an array/)
  t.throws(() => { return utils.callbackSuccess(1) },
           /"args" must be an array/)
  t.throws(() => { return utils.callbackSuccess('foo') },
           /"args" must be an array/)
  t.end()
})

test('isObjectPath', (t) => {
  t.equal(utils.isObjectPath(null), false)
  t.equal(utils.isObjectPath(1), false)
  t.equal(utils.isObjectPath(''), false)
  t.equal(utils.isObjectPath('a'), false)
  t.equal(utils.isObjectPath('a.b'), true)
  t.equal(utils.isObjectPath('a.b.c'), true)
  t.end()
})

test('propSort', (t) => {
  const props = [ 'C', 'D', 'B', 'E', 'B', 'A' ].map((path) => {
    return Prop.string().path(path).toJSON()
  })

  props.sort(utils.propSort)

  t.equal(props.map((p) => { return p.path }).toString(),
          'A,B,B,C,D,E')
  t.end()
})

test('assertType', (t) => {
  t.throws(() => {
    utils.assertType({ type: 'foobar' }, new Set([ 'x' ]))
  }, /THIS IS A BUG/)
  t.doesNotThrow(() => {
    utils.assertType({ type: 'foobar' }, new Set([ 'foobar' ]))
  })
  t.end()
})
