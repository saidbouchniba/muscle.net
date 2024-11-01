import React from 'react'
import { Table } from 'react-bootstrap'
import Header from './Header'

function Diet() {
    return (
        <div>
            <Header />
            <h1 style={{ textAlign: "center",color:"#0d6efd",fontFamily:"fantasy" }}>

                أهم مصادر الدهون الصحية</h1>
            <p style={{ textAlign: "center", paddingBottom:"10px",borderBottom:"1px solid"  }}>العناصر الغذائية في كل 100 غرام</p>
            <Table responsive="sm">
                <thead>
                    <tr class="table-warning">
                        <th>

                        </th>
                        <th>
                            س حرارية
                        </th>
                        <th>بروتين
                        </th>

                        <th>كارب</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <th>زيت الزيتون
                        </th>
                        <td>880</td>
                        <td>0</td>
                        <td>0</td>

                    </tr>
                    <tr class="table-info">

                        <th>الأفوكادو</th>
                        <td>160</td>
                        <td>2</td>
                        <td>8.5</td>

                    </tr>
                    <tr>

                        <th>مكسرات لوز
                        </th>
                        <td>534</td>
                        <td>21.2</td>
                        <td>21.6</td>

                    </tr>
                    <tr class="table-info">

                        <th>حبوب عباد الشمس</th>
                        <td>584</td>
                        <td>20.7</td>
                        <td>20</td>

                    </tr>
                    <tr>

                        <th>جوز أبيض</th>
                        <td>657</td>
                        <td>12.7</td>
                        <td>18.2</td>

                    </tr>
                    <tr class="table-info">

                        <th>فول سوداني</th>
                        <td>567</td>
                        <td>25.8</td>
                        <td>16.1</td>

                    </tr>
                    <tr>

                        <th>مكسرات، فستق</th>
                        <td>562</td>
                        <td>20.2</td>
                        <td>27.5</td>

                    </tr>



                </tbody>
            </Table>

            <h1 style={{ textAlign: "center" ,color:"#0d6efd",fontFamily:"fantasy"}}>

                أهم مصادر الكربوهيدرات</h1>
            <p style={{ textAlign: "center",borderBottom:"1px solid"   }}>العناصر الغذائية في كل 100 غرام</p>
            <Table responsive="sm">
                <thead>
                    <tr class="table-warning">
                        <th>

                        </th>
                        <th>
                            س حرارية
                        </th>
                        <th>بروتين
                        </th>

                        <th>كارب</th>

                    </tr>
                </thead>
                <tbody>
                    <tr >

                        <th>الشوفان</th>
                        <td>389</td>
                        <td>16.8</td>
                        <td>66.2</td>

                    </tr>
                    <tr class="table-info">

                        <th>الموز</th>
                        <td>89</td>
                        <td>1</td>
                        <td>22.8</td>

                    </tr>
                    <tr>

                        <th>البطاطا</th>
                        <td>100</td>
                        <td>1.7</td>
                        <td>23.4</td>

                    </tr>
                    <tr class="table-info">

                        <th>الحمص</th>
                        <td>119</td>
                        <td>4.9</td>
                        <td>22.61</td>

                    </tr>
                    <tr>

                        <th>ذرة، اصفر
                        </th>
                        <td>365</td>
                        <td>9.4</td>
                        <td>74.2</td>

                    </tr>
                    <tr class="table-info">

                        <th>فول </th>
                        <td>336</td>
                        <td>13</td>
                        <td>72.1</td>

                    </tr>
                    <tr>

                        <th>فول سوداني</th>
                        <td>567</td>
                        <td>25.8</td>
                        <td>16.3</td>

                    </tr>
                    <tr class="table-info">

                        <th>الارز الابيض</th>
                        <td>97</td>
                        <td>7</td>
                        <td>21</td>

                    </tr>
                    <tr>

                        <th>العدس</th>
                        <td>353</td>
                        <td>25.8</td>
                        <td>60</td>

                    </tr>
                </tbody>
            </Table>
            <h1 style={{ textAlign: "center" ,color:"#0d6efd",fontFamily:"fantasy"}}>

                أهم مصادر البروتين</h1>
            <p style={{ textAlign: "center",borderBottom:"1px solid"  }}>العناصر الغذائية في كل 100 غرام</p>
            <Table responsive="sm">
                <thead>
                    <tr class="table-warning">
                        <th>

                        </th>
                        <th>
                            س حرارية
                        </th>
                        <th>بروتين
                        </th>

                        <th>كارب</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <th>صدر الدجاج</th>
                        <td>165</td>
                        <td>24</td>
                        <td>0</td>

                    </tr>
                    <tr class="table-info">

                        <th>سمك التونة</th>
                        <td>186</td>
                        <td>26.5</td>
                        <td>0</td>

                    </tr>
                    <tr>

                        <th>سمك السردين</th>
                        <td>200</td>
                        <td>24</td>
                        <td>0</td>

                    </tr>
                    <tr class="table-info">

                        <th>لحم الخروف</th>
                        <td>282</td>
                        <td>25</td>
                        <td>0</td>

                    </tr>
                    <tr>

                        <th>كبد الدجاج</th>
                        <td>119</td>
                        <td>16.9</td>
                        <td>0.7</td>

                    </tr>
                    <tr class="table-info">

                        <th>البيض</th>
                        <td>143</td>
                        <td>12</td>
                        <td>0.7</td>

                    </tr>
                    <tr>

                        <th>فول سوداني</th>
                        <td>567</td>
                        <td>25.8</td>
                        <td>16.3</td>

                    </tr>
                    <tr class="table-info">

                        <th>لزبادي ( ياغورت)</th>
                        <td>61</td>
                        <td>3.4</td>
                        <td>4.6</td>

                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Diet