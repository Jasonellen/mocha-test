let book = require('./book');
var should = require('should');

describe("async", () => {
  it('read book async', function (done) {
    book.read((err, result) => {
      should.equal(err,null);
      should(result).be.a.String();
      done();  //操作异步通常需要做完成标志
    })
  })
})

//如果使用了it.only 则整个测试项目只会测试 带有only的
//还有skip方法，表示跳过指定的测试套件或测试用例。



