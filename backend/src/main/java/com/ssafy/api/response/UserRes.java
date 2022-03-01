package com.ssafy.api.response;

import com.ssafy.db.entity.User;
import com.ssafy.db.entity.UserCategory;
import io.swagger.annotations.ApiModel;
import java.util.List;
import java.util.stream.Collectors;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("UserResponse")
public class UserRes {

    Long id;
    String email;
    String nick_name;
    String profile_img;
    String birth;
    String determination;
    List<CategoryRes> categories;

    public static UserRes of(User user) {
        UserRes res = new UserRes();
        res.setId(user.getId());
        res.setEmail(user.getEmail());
        res.setNick_name(user.getNickName());
        res.setProfile_img(user.getProfileImg());
        if (user.getBirth() != null) {
            res.setBirth(user.getBirth().toString());
        }
        res.setDetermination(user.getDetermination());
        if (user.getUserCategories() != null && user.getUserCategories().size() > 0) {
            res.setCategories(user.getUserCategories().stream().map((UserCategory uc) -> {
                return CategoryRes.of(uc.getCategory());
            }).collect(Collectors.toList()));
        }
        return res;
    }

}
