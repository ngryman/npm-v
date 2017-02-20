import test from 'ava'
import npmVersion from './'

test.beforeEach(t => {
  t.context.PATH = process.env.PATH
})

test.afterEach.always(t => {
  process.env.PATH = t.context.PATH
})

test('get the version number', t => {
  const res = npmVersion()
  t.true('string' === typeof res.version)
  t.true('number' === typeof res.major)
  t.true('number' === typeof res.minor)
  t.true('number' === typeof res.patch)
})

test('is empty if npm is not installed', t => {
  process.env.PATH = '/bin'
  const res = npmVersion()
  t.deepEqual(res, {
    version: '',
    major: null,
    minor: null,
    patch: null
  })
})
