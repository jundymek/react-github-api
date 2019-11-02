import { getTechnologiesToSort } from "../../components/helpers/getTechnologiesToSort";

const data = {
  repositories: [
    { language: "CSS" },
    { language: "HTML" },
    { language: "JavaScript" },
    { language: "CSS" },
    { language: null },
    { language: "HTML" },
    { language: "HTML" }
  ]
};

const data1 = { repositories: [{ language: "HTML" }] };
const data2 = { repositories: [{ language: "CSS" }, { language: "HTML" }] };
const data3 = { repositories: [{ language: "HTML" }, { language: "HTML" }] };
const data4 = { repositories: [{ language: null }] };
const data5 = { repositories: [] };

describe("getTechnologiesToSort", () => {
  describe("for proper data ", () => {
    it("for 1 element ", () => {
      expect(getTechnologiesToSort(data1)).toEqual(["HTML"]);
    });
    it("for 2 different elements", () => {
      expect(getTechnologiesToSort(data2).sort()).toEqual(["HTML", "CSS"].sort());
    });
    it("for 2 same elements", () => {
      expect(getTechnologiesToSort(data3).sort()).toEqual(["HTML"].sort());
    });
    it("for 9 mixed elements", () => {
      expect(getTechnologiesToSort(data).sort()).toEqual(["JavaScript", "HTML", "CSS", "Other"].sort());
    });
    it("for 1 null element", () => {
      expect(getTechnologiesToSort(data4).sort()).toEqual(["Other"].sort());
    });
    it("empty array", () => {
      expect(getTechnologiesToSort(data5).sort()).toEqual([].sort());
    });
  });
});
