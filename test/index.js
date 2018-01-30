var assert = require('assert');

// npm run mocha会默认检查test文件夹
//describe描述可以无限嵌套，
//it执行测试语句，最好一个测试中执行一个测试，方便观察
//assert其中一个断言库，error-message均可选  https://www.npmjs.com/package/assert
//其他的还有should.js等

/*  常规函数测试  */
describe('Array-test', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1,'array-index-error-message');  //使用 == 判断
    });
  });
});

describe('assert-api-test', function() {
  describe('assert(value, message)', function() {
    it('assert(value, message) api is ok ？', function() {
      assert(true);  //判断 值 == true 是否正确
    });
    it('assert.strictEqual(actual,expected[,message]) api is ok ？', function() {
      assert.strictEqual(true,true);  // === 判断
    });
    //...
  });
});

/*
assert.fail(actual, expected, message, operator)
在不检查任何条件的情况下使断言失败。如果有错误信息则输出错误信息，否则输出actual和expected，中间用operator隔开。
---自行判断输出失败
*/