import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { login } from "../../../utils/api";

import { Button, FormControlLabel, Checkbox, Stack } from "@mui/material";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import SocialLogin from "./SocialLogin";

function LoginForm() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    /* 이메일 규칙의 정규식 표현 */
    login(inputId, inputPw);
  };

  return (
    <div>
      <Container className={styles.box}>
        <Form className={styles.form}>
          <h3 className={styles.title}>Stu.Delivery</h3>
          <Form.Group as={Row} className="mt-4 mb-3">
            <Col sm>
              <Form.Control
                type="text"
                name="input_id"
                value={inputId}
                onChange={handleInputId}
                placeholder="이메일 형식의 아이디를 입력해주세요."
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm>
              <Form.Control
                type="password"
                name="input_pw"
                value={inputPw}
                onChange={handleInputPw}
                placeholder="비밀번호를 입력해주세요."
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    onClickLogin();
                  }
                }}
              />
            </Col>
          </Form.Group>
          <Stack spacing={2} direction="row">
            <FormControlLabel
              control={<Checkbox value="remember" sx={{ color: "white" }} />}
              label="아이디 저장"
              sx={{
                color: "white",
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" sx={{ color: "white" }} />}
              label="자동 로그인"
              sx={{
                color: "white",
              }}
            />
          </Stack>
          <div className="d-grid gap-1">
            <Button
              className={styles.btn}
              fullWidth
              variant="contained"
              style={{ background: "rgba(191, 122, 38, 0.6)" }}
              sx={{ mt: 3, mb: 2 }}
              onClick={onClickLogin}
            >
              입장
            </Button>
          </div>
          <SocialLogin />
        </Form>
      </Container>
    </div>
  );
}

export default LoginForm;
