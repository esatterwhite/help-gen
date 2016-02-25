'use strict'

const test = require('tap').test
const Docs = require('../../').docs
const uuid = require('node-uuid')
const fs = require('fs')
const path = require('path')
const fixtures = path.join(__dirname, '..', 'fixtures')
const Markdown = require('../../lib/docs/markdown')

test('constructor', (t) => {
  t.throws(function() {
    Docs()
  }, /routes must be an Array/)

  t.throws(function() {
    Docs([])
  }, /opts.title is required/)

  let docs = new Docs([], {
    title: 'Test'
  })

  t.equal(docs.routes.length, 0)
  t.equal(docs.title, 'Test')
  t.ok(docs.hasOwnProperty('slugger'))
  t.ok(docs.hasOwnProperty('template'))

  docs = new Docs([], {
    title: 'Test'
  , toc: false
  })
  t.equal(docs.opts.toc, false)

  t.throws(function() {
    new Markdown()
  }, /section must be a Section/)

  t.end()
})

const resId = '5eae86ea-1913-49cd-b7d1-c7e28d0197e6'
const routes = [
  { method: 'GET'
  , path: '/organization'
  , input: [ { name: 'id', type: 'uuid', path: 'id', description: 'id' } ]
  , inputNote: 'Input Note'
  , output: [ { name: 'id', type: 'uuid', path: 'id', example: resId }]
  , outputNote: 'Output Note'
  , title: 'List Organzations'
  , description: 'Gets all organizations'
  }
, { method: 'POST'
  , path: '/organization'
  , input: [ { name: 'id', type: 'uuid', path: 'id', description: 'id' } ]
  , inputNote: 'Input Note'
  , output: [ { name: 'id', type: 'uuid', path: 'id', example: resId }]
  , outputNote: 'Output Note'
  , title: 'List Organzations'
  , description: 'Gets all organizations'
  }
]

function fixture(fp) {
  return fs.readFileSync(path.join(fixtures, fp), 'utf8').trim()
}

test('render', (t) => {
  const docs = new Docs(routes, {
    title: 'Test'
  })

  t.throws(function() {
    docs.render('biscuits')
  }, /Invalid format: biscuits/)

  let md = docs.render('markdown').trim()
  t.equal(md, fixture('doc-md.txt'))

  let json = docs.render('json').trim()
  t.equal(json, fixture('doc-json.txt'))

  let html = docs.render('html').trim()
  t.equal(html, fixture('doc-html.txt'))

  t.end()
})
