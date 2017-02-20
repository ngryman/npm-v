const execSync = require('child_process').execSync

module.exports = function npmVersion() {
  let semver, chunks
  try {
    semver = execSync('npm -v', { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] })
    chunks = semver.split('.').map(Number)
  }
  catch (err) {
    semver = ''
    chunks = [null, null, null]
  }
  return {
    version: semver,
    major: chunks[0],
    minor: chunks[1],
    patch: chunks[2]
  }
}
