var posts=["posts/e55545fc.html","posts/5c80d97f.html","posts/57f311fb.html","posts/eab4f7c8.html","posts/6de746ad.html","posts/35b59744.html","posts/52d5f2e7.html","posts/440005b0.html","posts/585a4934.html","posts/e586e758.html","posts/6b57d472.html","posts/c0b5f101.html","posts/114a018.html","posts/4a17b156.html","posts/de7f0b92.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"铭心石刻","link":"https://blog.kouseki.cn/","avatar":"https://imgbed.814925.xyz/file/1729154278403_fee184301512b1906a1cdbd250dce66b_avatar.webp","descr":"愿岁并谢，与友长兮","siteshot":"https://imgbed.814925.xyz/file/1729154281582_siteshot.webp","tag":"技术大佬"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"陌颜Hao","link":"https://blog.imoyan.top/","avatar":"https://imgbed.814925.xyz/file/1729154874210_fbc6c7315aa7d66e8ab9713959e83501_6709ddf3513c5.jpg","descr":"愿永不忘初心！","tag":"热心大佬"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://imgbed.814925.xyz/file/1729155126813_7e1a6e3122bca708af9d68accf269084_headimg_dl_dst_uin=1645253&spec=640.jpg","descr":"分享网络安全与科技生活","siteshot":"https://imgbed.814925.xyz/file/1729155199819_image.png","tag":"技术大佬"},{"name":"一粒微尘","link":"https://blog.667408.xyz","avatar":"https://imgbed.814925.xyz/file/1729155455712_527215b59a987937c29ca360f1a13e51_460793.webp","descr":"撷光以望，纳星于瞳","recommend":true},{"name":"XingJiのBlog","link":"https://love.xingji.fun/","avatar":"https://imgbed.814925.xyz/file/1729154095096_f305bb2624c553c5af6a117187033e95_20240920-66ed7b168c38c.jpg","descr":"迄今所有人生都大写着失败，但不妨碍我继续向前✨","recommend":true},{"name":"梦爱吃鱼","link":"https://blog.bsgun.cn/","avatar":"https://imgbed.814925.xyz/file/1729153187960_31fe961d5d467836f72452a2920d6e4f_avatar.256.png","descr":"但愿日子清静抬头遇见的满是柔情","recommend":true},{"name":"晓寒的互联网自留之地","link":"https://xiaohan-kaka.me/","avatar":"https://imgbed.814925.xyz/file/1729153585093_cd6ad80e35c571f8a23d2e2d0491c70e_120887894_p1.jpg","descr":"醉后不知天在水，满船清梦压星河"},{"name":"龙窝","link":"https://blog.qiyao.us.kg/","avatar":"https://imgbed.814925.xyz/file/1729153562599_5c327cb3689de186226623d3f528be82_atiq.png","descr":"随便发点啥啦ouo"},{"name":"Mo的记事簿","link":"https://blog.xiowo.net/","avatar":"https://imgbed.814925.xyz/file/1729153771383_0ed71e06081dcef170baa5f0e06fc331_avatar.png","descr":"万年鸽王，哈哈OvO"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };