package hacker.framework.common.config;


import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.yeauty.annotation.*;
import org.yeauty.pojo.Session;


import java.util.ArrayList;
import java.util.List;

/**
 * @description websocket服务
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 15:34
 */
@Slf4j
@Component
@ServerEndpoint(prefix = "netty-websocket")
public class WebSocketServer {

    /**
     * 打开链接
     * @param session
     */
    @OnOpen
    public void onOpen(Session session) {
        this.session = session;
        addSession();
        //TODO 打开链接后要做什么
        //在线数加1
        addOnlineCount();
        log.info("open");
        this.session.sendText("打开链接");
    }

    /**
     * 连接关闭调用的方法
     */
    @OnClose
    public void onClose() {
        //TODO 关闭链接后要做什么
        log.info("close");
    }

    /**
     * 接受到消息
     * @param message
     * @param session
     */
    @OnMessage
    public void onMessage(String message, Session session) {
        //TODO 接受消息的逻辑
        System.out.println("收到消息："+message);
        sendMessage(message);
    }

    /**
     * 服务端主动发送消息
     * @param message 消息体
     */
    public void sendMessage(String message) {
        this.session.sendText(message);
    }

    /**
     * 发生错误
     * @param session
     * @param e
     */
    @OnError
    public void onError(Session session, Throwable e) {
        log.error("websocket错误", e);
        e.printStackTrace();
    }

    /**
     * 连接数+1
     * @return
     */
    public int addOnlineCount(){
        return WebSocketServer.count++;
    }

    /**
     * 添加session到容器
     */
    public void addSession(){
        WebSocketServer.sessions.add(this.session);
    }

    private static volatile int count = 0;
    private static volatile List<Session> sessions = new ArrayList<>(10);
    private Session session = null;
}
