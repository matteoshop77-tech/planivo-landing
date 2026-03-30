import { writeFileSync, mkdirSync } from 'fs'
mkdirSync('public', { recursive: true })
writeFileSync('public/mockups.html', '<!DOCTYPE html><html><body><p>test</p></body></html>', 'utf8')
console.log('OK')