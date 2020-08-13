import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu } from 'antd';
import { Row, Col ,Divider,Card} from "antd";
import photo from '@images/photo.png';
import './index.less'

// let exportPdf = () => {
// 	// 要导出的dom节点，注意如果使用class控制样式，一定css规则
//     const element = document.getElementById('contain');
//     // 导出配置
//     const opt = {
//       margin: 1,
//       filename: '导出的pdf名称',
//       image: { type: 'jpeg', quality: 0.98 }, // 导出的图片质量和格式
//       html2canvas: { scale: 2, useCORS: true }, // useCORS很重要，解决文档中图片跨域问题
//       jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
//     };
//     if (element) {
//         console.log("export");
//       html2pdf().set(opt).from(element).save(); // 导出
//     }
//   };


ReactDOM.render(
    <Card title="简历" >
        <Row className="resumerow" gutter={16} align="top" justify="space-around">
            <Col span={18}>
                <Card title=" 个人信息" id="infocol" className="resumecol" >
                    <ul >
                        <li>姓名：章焱 </li>
                        <li>年龄：25</li>
                        <li>联系电话：15665412772</li>
                        <li>邮箱：whzyzyz@outlook.com</li>
                    </ul>
                </Card>
                
                <Card title="教育经历" id="educationinfo" className="resumecol">
                    <ul>
                        <li>硕士 2018年9月-2021年6月	中国科学技术大学无机化学专业</li>
                        <li>本科 2014年9月-2018年6月	中国科学技术大学材料化学专业</li>
                    </ul>
                </Card>
            </Col>
            <Col span={6}>
                <Card title="个人照片" className="resumecol" cover={<img src={photo} alt="zhangyan" style={{width:"100%"}} />}  bodyStyle={{display:"none"}}>
                </Card>
            </Col>
            
            <Col span={24}>
                <Card id="skill" title="专业技能" className="resumecol">
                    <ul>
                    <li>熟练使用Javascript、HTML、CSS构建网页 </li>
                    <li>熟悉MySQL,MongoDB数据库使用方法</li>
                    <li>熟悉基于nodejs,Typescript的前后端开发</li>
                    <li>熟悉React前端框架, Webpack自动化工具</li>
                    <li>可以灵活使用数据结构和算法解决问题</li>
                    <li>一定的嵌入式开发经验</li>
                    </ul>
                </Card>
            </Col>

            <Col span={24}>
                <Card id="reward" title="获奖情况" className="resumecol">
                    <ul>
                    <li>2015年度、2016年度 中国科学技术大学 优秀学生奖学金铜奖</li>
                    <li>2012年 全国青少年信息学奥林匹克联赛NOIP提高组一等奖</li>
                    <li>2011年 全国青少年信息学奥林匹克联赛NOIP提高组一等奖</li>
                    </ul>
                </Card>
            </Col>

            
            <Col span={24}>
                <Card id="project" title="项目经历" className="resumecol">
                    <ul>
                    <li>吴宇恩教授实验室主页：使用React框架的响应式单页面网页以及其内容管理系统，基于typescript webpack开发。
链接：<a href="https://github.com/whzyustc/CANWebsite">https://github.com/whzyustc/CANWebsite </a><a href="http://staff.ustc.edu.cn/~yuenwu"> http://staff.ustc.edu.cn/~yuenwu</a></li>
                    <li>物联网氧气甲醛传感器：基于Arduino开发的嵌入式传感器，自动读取传感器信号上传至服务器，可以访问服务器以网页形式获取数据。基于nodejs开发的后台，使用Mysql记录数据。
服务器：<a href="https://github.com/whzyustc/OxygenSensorServer">https://github.com/whzyustc/OxygenSensorServer </a></li>
                    <li>RemoteTouchPad：基于nodejs的远程触摸板，可以将平板手机作为pc,mac的触摸板使用
            链接：<a href="https://github.com/whzyustc/RemoteTouchPad">https://github.com/whzyustc/RemoteTouchPad</a></li>
            </ul>
                </Card>
            </Col>
        </Row>

    </Card>

    ,
    document.getElementById('contain')
)

