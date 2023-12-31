'use client'
import React from 'react'
import '../../styles/SizeGuide.css'
import { useRouter } from 'next/navigation'

const Page = () => {

    const router = useRouter()

    const goToLink = (category) => {
        router.push(`/products?category=${category}`)
    }

    return (
        <section>
            <h1 className='text-center text-4xl font-mono underline underline-offset-8 text-purple-500 mt-4'>Size Guide</h1>
            <div className="panel" style={{display: 'block'}}>
                <table border="1" className='size-guide-table'>
                    <tbody>
                        <tr>
                            <th style={{width: '100%'}} colspan="5">US</th>
                        </tr>
                        <tr>
                            <th className="w15">&nbsp;</th>
                            <th className="w15">Category</th>
                            <th className="w20">&nbsp;</th>
                            <th className="w25 t-left">Composits</th>
                            <th className="w25 t-left">Sizes</th>
                        </tr>
                        <tr>
                            <td className="w15 cursor-pointer" rowspan="42" onClick={()=>goToLink('Sheet Set')}>Sheet Set</td>
                        </tr>
                        <tr>
                            <td className="w15" rowspan="7">Queen</td>
                        </tr>
                        <tr>
                            <td className="w20" rowspan="3">4 Pc</td>
                            <td className="t-left w25">1 Fitted Sheet</td>
                            <td className="t-left w25">61&quot; x 80&quot; + 15&quot;</td>
                        </tr>
                        <tr>
                            <td className="t-left w25">1 Flat Sheet</td>
                            <td className="t-left w25">90&quot; x 102 + 4&quot;</td>
                        </tr>
                        <tr>
                            <td className="t-left w25">2 Standard Pillowcases</td>
                            <td className="t-left w25">20&quot; x 30&quot;</td>
                        </tr>
                        <tr>
                            <td className="w20" rowspan="3">6 Pc</td>
                            <td className="t-left w25">1 Fitted Sheet</td>
                            <td className="t-left w25">61&quot; x 80&quot; + 15&quot;</td>
                        </tr>
                        <tr>
                            <td className="t-left w25">1 Flat Sheet</td>
                            <td className="t-left w25">90&quot; x 102 + 4&quot;</td>
                        </tr>
                        <tr>
                            <td className="t-left w25">4 Standard Pillowcases</td>
                            <td className="t-left w25">20&quot; x 30&quot;</td>
                        </tr>
                        <tr>
                            <td colspan="4">&nbsp;</td>
                        </tr>
                        <tr>
                            <td className="w15" rowspan="7">King </td>
                        </tr>
                        <tr>
                            <td className="w20" rowspan="3">4 Pc</td>
                            <td className="t-left w25">1 Fitted Sheet</td>
                            <td className="t-left w25">79&quot; x 80&quot; + 15&quot;</td>
                        </tr>
                        <tr>
                            <td className="t-left w25">1 Flat Sheet</td>
                            <td className="t-left w25">108&quot; x 102 + 4&quot;</td>
                        </tr>
                        <tr>
                            <td className="t-left w25">2 King Size Pillowcases</td>
                            <td className="t-left w25">20&quot; x 40&quot;</td>
                        </tr>
                        <tr>
                            <td className="w20" rowspan="3">6 Pc</td>
                            <td className="t-left w25">1 Fitted Sheet</td>
                            <td className="t-left w25">79&quot; x 80&quot; + 15&quot;</td>
                        </tr>
                        <tr>
                            <td className="t-left w25">1 Flat Sheet</td>
                            <td className="t-left w25">108&quot; x 102 + 4&quot;</td>
                        </tr>
                        <tr>
                            <td className="t-left w25">4 King Size Pillowcases</td>
                            <td className="t-left w25">20&quot; x 40&quot;</td>
                        </tr>
                        <tr>
                            <td colspan="4">&nbsp;</td>
                        </tr>
                        <tr>
                            <td className="w15" rowspan="4">Cal King</td>
                        </tr>
                        <tr>
                            <td className="w20" rowspan="3">4 Pc</td>
                            <td className="t-left w25">1 Fitted Sheet</td>
                            <td className="t-left w25">73&quot; x 84&quot; + 15&quot;</td>
                        </tr>
                        <tr>
                            <td className="t-left w25">1 Flat Sheet</td>
                            <td className="t-left w25">108&quot; x 102&quot; + 4&quot;</td>
                        </tr>
                        <tr>
                            <td className="t-left w25">2 King Size Pillowcases</td>
                            <td className="t-left w25">20&quot; x 40&quot;</td>
                        </tr>
                        <tr>
                            <td colspan="4">&nbsp;</td>
                        </tr>
                        <tr>
                            <td className="w15" rowspan="4">Twin</td>
                        </tr>
                        <tr>
                            <td className="w20" rowspan="3">3 Pc</td>
                            <td className="t-left w25">1 Fitted Sheet</td>
                            <td className="t-left w25">40&quot; x 75&quot; + 15&quot;</td>
                        </tr>
                        <tr>
                            <td className="t-left w25">1 Flat Sheet</td>
                            <td className="t-left w25">66&quot; x 96&quot; + 4&quot;</td>
                        </tr>
                        <tr>
                            <td className="t-left w25">1 Standard Pillowcase</td>
                            <td className="t-left w25">20&quot; x 30&quot;</td>
                        </tr>
                        <tr>
                            <td colspan="4">&nbsp;</td>
                        </tr>
                        <tr>
                            <td className="w15" rowspan="4">Twin XL</td>
                        </tr>
                        <tr>
                            <td className="w20" rowspan="3">3 Pc</td>
                            <td className="t-left w25">1 Fitted Sheet</td>
                            <td className="t-left w25">40&quot; x 80&quot; + 15&quot;</td>
                        </tr>
                        <tr>
                            <td className="t-left w25">1 Flat Sheet</td>
                            <td className="t-left w25">66&quot; x 102&quot; + 4&quot;</td>
                        </tr>
                        <tr>
                            <td className="t-left w25">1 Standard Pillowcase</td>
                            <td className="t-left w25">20&quot; x 30&quot;</td>
                        </tr>
                        <tr>
                            <td colspan="4">&nbsp;</td>
                        </tr>
                        <tr>
                            <td className="w15" rowspan="4">Split King</td>
                        </tr>
                        <tr>
                            <td className="w20" rowspan="3">5 Pc</td>
                            <td className="t-left w25">2 Fitted Sheets</td>
                            <td className="t-left w25">39&quot; x 80&quot; + 15&quot;</td>
                        </tr>
                        <tr>
                            <td className="t-left w25">1 Flat Sheet</td>
                            <td className="t-left w25">108&quot; x 102&quot;</td>
                        </tr>
                        <tr>
                            <td className="t-left w25">2 King Size Pillowcases</td>
                            <td className="t-left w25">20&quot; x 40&quot;</td>
                        </tr>
                        <tr>
                            <td colspan="4">&nbsp;</td>
                        </tr>
                        <tr>
                            <td className="w15" rowspan="4">Full</td>
                        </tr>
                        <tr>
                            <td className="w20" rowspan="3">4 Pc</td>
                            <td className="t-left w25">1 Fitted Sheet</td>
                            <td className="t-left w25">55&quot; x 75&quot; + 15&quot;</td>
                        </tr>
                        <tr>
                            <td className="t-left w25">1 Flat Sheet</td>
                            <td className="t-left w25">81&quot; x 96&quot; + 4</td>
                        </tr>
                        <tr>
                            <td className="t-left w25">2 Standard Pillowcases</td>
                            <td className="t-left w25">20&quot; x 30&quot;</td>
                        </tr>
                    </tbody>
                </table>
                <table border="1" className='m30 size-guide-table'>
                    <tbody>
                        <tr>
                            <th className="w15">&nbsp;</th>
                            <th className="w15">Category</th>
                            <th className="w20">&nbsp;</th>
                            <th className="w25 t-left">Composits</th>
                            <th className="w25 t-left">Sizes</th>
                        </tr>
                        <tr>
                            <td className="w15 cursor-pointer" rowspan="12" onClick={()=>goToLink('Duvet Cover')}>Duvet Cover Set</td>
                        </tr>
                        <tr>
                            <td className="w15" rowspan="3">Queen / Full</td>
                        </tr>
                        <tr>
                            <td className="w20" rowspan="2">3 Pc</td>
                            <td className="t-left w25">1 Queen Duvet Cover</td>
                            <td className="t-left w25">90&quot; x 90&quot;</td>
                        </tr>
                        <tr>
                            <td className="t-left w25">2 Standard Pillow Shams</td>
                            <td className="t-left w25">20&quot; x 26&quot;</td>
                        </tr>
                        <tr>
                            <td colspan="4">&nbsp;</td>
                        </tr>
                        <tr>
                            <td className="w15" rowspan="3">King / Cal King</td>
                        </tr>
                        <tr>
                            <td className="w20" rowspan="2">3 Pc</td>
                            <td className="t-left w25">1 King Duvet Cover</td>
                            <td className="t-left w25">104&quot; x 90&quot;</td>
                        </tr>
                        <tr>
                            <td className="t-left w25">2 King Pillow Shams</td>
                            <td className="t-left w25">20&quot; x 36&quot;</td>
                        </tr>
                        <tr>
                            <td colspan="4">&nbsp;</td>
                        </tr>
                        <tr>
                            <td className="w15" rowspan="3">Twin / Twin XL</td>
                        </tr>
                        <tr>
                            <td className="w20" rowspan="2">2 Pc</td>
                            <td className="t-left w25">1 Twin Duvet Cover</td>
                            <td className="t-left w25">68&quot; x 86&quot;</td>
                        </tr>
                        <tr>
                            <td className="t-left w25">1 King Size Pillowcases</td>
                            <td className="t-left w25">20&quot; x 26&quot;</td>
                        </tr>
                    </tbody>
                </table>
                <table className='m30 size-guide-table' border="1">
                    <tbody>
                        <tr>
                            <th className="w15">&nbsp;</th>
                            <th className="w15">Category</th>
                            <th className="w20">&nbsp;</th>
                            <th className="w25 t-left">Composits</th>
                            <th className="w25 t-left">Sizes</th>
                        </tr>
                        <tr>
                            <td className="w15 cursor-pointer" rowspan="7" onClick={()=>goToLink('Fitted Sheet')}>Fitted Sheet</td>
                        </tr>
                        <tr>
                            <td className="w15">King</td>
                            <td className="w20">1 Pc</td>
                            <td className="t-left w25">1 Fitted sheet</td>
                            <td className="t-left w25">78&quot; x 80&quot; + 15&quot;</td>
                        </tr>
                        <tr>
                            <td className="w15">Cal King</td>
                            <td className="w20">1 Pc</td>
                            <td className="t-left w25">1 Fitted sheet</td>
                            <td className="t-left w25">73&quot; x 84&quot; + 15&quot;</td>
                        </tr>
                        <tr>
                            <td className="w15">Queen</td>
                            <td className="w20">1 Pc</td>
                            <td className="t-left w25">1 Fitted sheet</td>
                            <td className="t-left w25">61&quot; x 80&quot; + 15&quot;</td>
                        </tr>
                        <tr>
                            <td className="w15">Twin</td>
                            <td className="w20">1 Pc</td>
                            <td className="t-left w25">1 Fitted sheet</td>
                            <td className="t-left w25">39&quot; x 75&quot; + 15&quot;</td>
                        </tr>
                        <tr>
                            <td className="w15">Twin XL</td>
                            <td className="w20">1 Pc</td>
                            <td className="t-left w25">1 Fitted sheet</td>
                            <td className="t-left w25">39&quot; x 80&quot; + 15&quot;</td>
                        </tr>
                        <tr>
                            <td className="w15">Full</td>
                            <td className="w20">1 Pc</td>
                            <td className="t-left w25">1 Fitted sheet</td>
                            <td className="t-left w25">55&quot; x 75&quot; + 15&quot;</td>
                        </tr>
                    </tbody>
                </table>
                <table className='m30 size-guide-table' border="1">
                    <tbody>
                        <tr>
                            <th className="w15">&nbsp;</th>
                            <th className="w15">Category</th>
                            <th className="w20">&nbsp;</th>
                            <th className="w25 t-left">Composits</th>
                            <th className="w25 t-left">Sizes</th>
                        </tr>
                        <tr>
                            <td className="w15 cursor-pointer" rowspan="5" onClick={()=>goToLink('Flat Sheet')}>Flat Sheet</td>
                        </tr>
                        <tr>
                            <td className="w15">King</td>
                            <td className="w20">1 Pc</td>
                            <td className="t-left w25">1 Flat Sheet</td>
                            <td className="t-left w25">108&quot; x 102&quot;</td>
                        </tr>
                        <tr>
                            <td className="w15">Queen</td>
                            <td className="w20">1 Pc</td>
                            <td className="t-left w25">1 Flat Sheet</td>
                            <td className="t-left w25">90&quot; x 102&quot;</td>
                        </tr>
                        <tr>
                            <td className="w15">Twin XL</td>
                            <td className="w20">1 Pc</td>
                            <td className="t-left w25">1 Flat Sheet</td>
                            <td className="t-left w25">66&quot; x 102&quot;</td>
                        </tr>
                        <tr>
                            <td className="w15">Full</td>
                            <td className="w20">1 Pc</td>
                            <td className="t-left w25">1 Flat Sheet</td>
                            <td className="t-left w25">81&quot; x 102&quot;</td>
                        </tr>
                    </tbody>
                </table>
                <table className='m30 size-guide-table' border="1">
                    <tbody>
                        <tr>
                            <th className="w15">&nbsp;</th>
                            <th className="w15">Category</th>
                            <th className="w20">&nbsp;</th>
                            <th className="w25 t-left">Composits</th>
                            <th className="w25 t-left">Sizes</th>
                        </tr>
                        <tr>
                            <td className="w15 cursor-pointer" rowspan="3" onClick={()=>goToLink('Pillow Cases')}>Pillow cases</td>
                        </tr>
                        <tr>
                            <td className="w15">Standard / Queen</td>
                            <td className="w20">2 Pc</td>
                            <td className="t-left w25">2 Standard Pillowcases</td>
                            <td className="t-left w25">20&quot; x 30&quot;</td>
                        </tr>
                        <tr>
                            <td className="w15">King</td>
                            <td className="w20">2 Pc</td>
                            <td className="t-left w25">2 King Size Pillowcases</td>
                            <td className="t-left w25">20&quot; x 40&quot;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Page