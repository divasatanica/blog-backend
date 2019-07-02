import {isEmptyStr, isMail, isUserName} from '../../src/util/format'

describe('util.format.isEmptyStr', function () {
  it('should return false', function () {
    expect(isEmptyStr('coma')).toBe(false)
    expect(isEmptyStr('co ma')).toBe(false)
    expect(isEmptyStr(' ')).toBe(false)
  })
  it('should return true while empty', function () {
    expect(isEmptyStr('')).toBe(true)
  })
  it('shoud return true while the input ain\'t string type', function () {
    expect(isEmptyStr(0)).toBe(true)
    expect(isEmptyStr(12)).toBe(true)
    expect(isEmptyStr([])).toBe(true)
    expect(isEmptyStr({})).toBe(true)
    expect(isEmptyStr(undefined)).toBe(true)
    expect(isEmptyStr(null)).toBe(true)
    expect(isEmptyStr(NaN)).toBe(true)
  })
})

describe('util.format.isMail', function () {
  it('should return true', function () {
    expect(isMail('jayhebes@vip.qq.com')).toBe(true)
    expect(isMail('541199811@vip.qq.com')).toBe(true)
    expect(isMail('coma-desperado@gmail.com')).toBe(true)
  })
  it('should return false while the input ain\'t legal mail', function () {
    expect(isMail('jayhebescom')).toBe(false)
    expect(isMail('541.qq.com')).toBe(false)
    expect(isMail('')).toBe(false)
    expect(isMail(' ')).toBe(false)
    expect(isMail('54119@9811@vip.qq.com')).toBe(false) 
  })
  it('should return false while the input ain\'t string type', function () {
    expect(isMail(123)).toBe(false)
    expect(isMail([])).toBe(false)
    expect(isMail({})).toBe(false)
    expect(isMail(null)).toBe(false)
    expect(isMail(undefined)).toBe(false)
    expect(isMail(null)).toBe(false)
    expect(isMail(NaN)).toBe(false)
  })
})

describe('util.format.isUsername', function () {
  it('should return true', function () {
    expect(isUserName('a__1002')).toBe(true)
    expect(isUserName('a__10021da')).toBe(true)
    expect(isUserName('aafs002')).toBe(true)
  })
  it('should return false while the input is empty', function () {
    expect(isUserName('')).toBe(false)
    expect(isUserName(' ')).toBe(false)
  })
  it('should return false while the input is too long', function () {
    expect(isUserName('afasfafafafafasfasfasfafaf=15151')).toBe(false)
    expect(isUserName('afasfafafafafasfasfasfasf%$##afaf=15151')).toBe(false)
  })
  it('should return false while the input contents illegal character', function () {
    expect(isUserName('afasfaffa$!$!')).toBe(false)
    expect(isUserName('1234sfaff')).toBe(false)
  })
  it('should return false while the input ain\'t string type', function () {
    expect(isUserName(null)).toBe(false)
    expect(isUserName(undefined)).toBe(false)
    expect(isUserName(NaN)).toBe(false)
  })
})