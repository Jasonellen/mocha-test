
// api 测试 参考文档：https://www.cnblogs.com/wade-xu/archive/2015/07/28/4673460.html

var should = require('should');
let request = require('supertest');
var assert = require('assert');

let fetch = request('http://scnc.mdslife.com/api/v1')
describe("api", () => {
  it('get api test:', function (done) {
    fetch.get('/messages/get_message')
      .query({n: 100}) //添加字符串参数
      // .expect('Content-Type', /html/)
      // .expect(200,done)
      
      //或者自定义报错信息
      .expect(200)
      .end(function (err, res) {
        console.log(res,'==========')
        if(err){
          assert.fail(res.statusCode, 200, '----接口报错-----')
        }
        done();
      });

  })
  
  it('post api test:', function (done) {
    var body = {
      token:'oC8jQwm0e_za5_1lKi57KDNHpmZc',
      operation:1
    };
    fetch.post('/products/3/collect')
       .set('Accept', 'application/json')
       .send(body)
       .expect(200)
       .expect('Content-Type', 'application/json; charset=utf-8')
       .end(function(err, res) {
        console.log(res.body,'===============')
          if (err) return done(err);
          should(res).be.a.Object();
          done();
        });
  })

})
