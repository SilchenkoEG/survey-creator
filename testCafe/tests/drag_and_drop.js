import { url, init } from "../settings";
import { Selector, ClientFunction } from "testcafe";
const assert = require("assert");
const title = `drag and drop`;

fixture`surveyjseditor: ${title}`.page`${url}`.beforeEach(async ctx => {
  await init();
});

test(`check d&d`, async t => {
  const getQuestionsAddedCount = ClientFunction(
    () => document.querySelectorAll(".svd_container .svd_question ").length
  );

  await t.dragToElement(
    `[title~=Radiogroup]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 1);
});

test(`check drop to the bottom`, async t => {
  const getQuestionsAddedCount = ClientFunction(
    () => document.querySelectorAll(".svd_container .svd_question ").length
  );
  const checkCheckbox = ClientFunction(
    () =>
      document
        .querySelectorAll(".svd_container .svd_question ")[0]
        .querySelectorAll(".sv_qcbx ").length === 1
  );

  await t.dragToElement(
    `[title~=Checkbox]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 1);
  assert.ok(await checkCheckbox());

  await t.dragToElement(
    `[title~=Radiogroup]`,
    `.svd_container .svd_questions_editor`
  );
  assert.equal(await getQuestionsAddedCount(), 2);
});

test("check change order of questions", async t => {
  const getQuestionsOrder = ClientFunction(() => {
    var names = [];
    document
      .querySelectorAll(".svd_questions_editor .svd_question")
      .forEach(questionTemplate => {
        names.push(questionTemplate.getAttribute("name"));
      });
    return names;
  });

  await t.click(`[title~=Checkbox]`);
  await t.click(`[title~=Checkbox]`);

  await t.dragToElement(
    ".svd_questions_editor [name='question2']",
    ".svd_questions_editor",
    {
      destinationOffsetY: 100
    }
  );
  assert.deepEqual(await getQuestionsOrder(), ["question2", "question1"]);
});

const getQuestionsInPanel = ClientFunction(() => {
  var names = [];
  document
    .querySelectorAll(".svd_questions_editor .panel_actions .svd_question")
    .forEach(function(question) {
      names.push(question.name);
    });
  return names;
});

test("check drop question from toolbox in panel", async t => {
  await t.click(`[title=Panel]`);
  await t.dragToElement(
    `[title=Boolean]`,
    ".svd_questions_editor .panel_actions"
  );

  assert.deepEqual(await getQuestionsInPanel(), ["question1"]);
});

test("check drop question from toolbox to the bottom of panel", async t => {
  await t.click(`[title=Panel]`);
  await t.dragToElement(
    `[title=Boolean]`,
    ".svd_questions_editor .panel_actions"
  );
  await t.dragToElement(
    `[title=Boolean]`,
    ".svd_questions_editor .panel_actions",
    {
      destinationOffsetY: -1
    }
  );

  assert.deepEqual(await getQuestionsInPanel(), ["question1", "question2"]);
});

test("check move question from panel to up", async t => {
  await t.click("[title=Panel]");
  await t.dragToElement(
    "[title=Boolean]",
    ".svd_questions_editor .panel_actions"
  );

  await t.dragToElement(
    ".svd_questions_editor .panel_actions [name=question1]",
    ".svd_questions_editor",
    {
      destinationOffsetY: 100
    }
  );

  assert.deepEqual(await getQuestionsInPanel(), []);
});

test.skip("check move question from panel to bottom", async t => {
  await t.click("[title=Panel]");
  await t.dragToElement(
    "[title=Boolean]",
    ".svd_questions_editor .panel_actions"
  );

  await t.dragToElement(
    ".svd_questions_editor .panel_actions [name=question1]",
    ".svd_questions_editor",
    {
      destinationOffsetY: -1
    }
  );

  assert.deepEqual(await getQuestionsInPanel(), []);
});

test("check move question from survey to panel", async t => {
  await t.click("[title=Panel]");
  await t.click("[title=Checkbox]");
  await t.dragToElement(
    ".svd_questions_editor [name=question1]",
    ".svd_questions_editor .panel_actions"
  );

  assert.deepEqual(await getQuestionsInPanel(), ["question1"]);
});

test("check change order of questions in panel", async t => {
  await t.click("[title=Panel]");
  await t.dragToElement(
    `[title=Boolean]`,
    ".svd_questions_editor .panel_actions"
  );
  await t.dragToElement(
    `[title=Boolean]`,
    ".svd_questions_editor .panel_actions",
    {
      destinationOffsetY: -1
    }
  );
  await t.dragToElement(
    ".svd_questions_editor [name=question2]",
    ".svd_questions_editor .panel_actions",
    {
      destinationOffsetY: 100
    }
  );
  assert.deepEqual(await getQuestionsInPanel(), ["question2", "question1"]);
});
assert.deepE;
