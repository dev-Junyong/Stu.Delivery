package com.ssafy.api.response;

import com.ssafy.db.entity.StudyBoard;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("StudyBoardResponse")
public class StudyBoardRes {
    @ApiModelProperty(name = "스터디보드 ID", example = "1")
    Long study_board_id;

    @ApiModelProperty(name = "스터디 ID", example = "1")
    Long study_id;

    @ApiModelProperty(name = "작성자 ID", example = "1")
    Long user_id;

    @ApiModelProperty(name = "제목", example = "공지사항")
    String title;

    @ApiModelProperty(name = "내용", example = "공지사항 내용입니다")
    String content;

    @ApiModelProperty(name = "생성일", example = "2022-02-03T12:12:01.092")
    String created_at;

    public static StudyBoardRes of(StudyBoard studyBoard) {
        StudyBoardRes res = new StudyBoardRes();
        res.setStudy_board_id(studyBoard.getId());
        res.setStudy_id(studyBoard.getStudy().getId());
        res.setUser_id(studyBoard.getWriter().getId());
        res.setTitle(studyBoard.getTitle());
        res.setContent(studyBoard.getContent());
        res.setCreated_at(studyBoard.getCreatedAt().toString());
        return res;
    }
}
