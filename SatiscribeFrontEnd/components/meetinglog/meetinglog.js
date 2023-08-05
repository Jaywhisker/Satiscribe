import React, { useState } from 'react';
import styles from '../../styles/meeting.module.css';
import { LogoButton } from '../';

const Meeting = ({ project, columns, homepage, projectTask }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = project.project_details.meeting_logs.filter(row =>
        row.meeting_name &&
        row.meeting_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Filter the projects based on the search term
    const filteredProjects = homepage
        ? projectTask.filter(p =>
            p.project_name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : null;

    // Find the latest meeting based on date
    const latestMeeting = homepage
        ? project.project_details.meeting_logs.reduce((latest, current) => {
            const latestDate = new Date(latest.meeting_details.date);
            const currentDate = new Date(current.meeting_details.date);
            return latestDate > currentDate ? latest : current;
        }, project.project_details.meeting_logs[0])
        : null;

    const noDataComponent = (
        <div className={`${styles.tablerow} ${styles.row}`}> {/* Apply the same row styles */}
            <td className={styles.norow} colSpan={2}>
                {homepage ? (
                    <div>No relevant projects found.</div>
                ) : (
                    <div>No relevant meetings found.</div>
                )}
            </td>
        </div>
    );



    const clearSearch = () => {
        setSearchTerm('');
    };


    return (
        <div>
            <div className={styles.searchPlace}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className={styles.searchBar}
                />
                <LogoButton
                    onClick={clearSearch}
                    logoSize="medium"
                    logoStyle={{ backgroundImage: `url("/icons/Replace.png")` }}
                    disabledLogoStyle={{ backgroundImage: `url("/iconsGrey/Replace.png")` }}
                    disabled={false}
                />
            </div>

            <table className={styles.tablecontainer}>
                {((filteredData.length > 0 || (filteredProjects && filteredProjects.length > 0))) && (
                    <thead className={styles.tableheader}>
                        <tr>
                            {columns.map((col, index) => (
                                <th key={index} className={styles.tableheadercell}>
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                )}
                <tbody>
                    {homepage ? (
                        projectTask
                            .filter(proj =>
                                proj.project_name.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                            .map((proj, projectIndex) => {
                                const latestMeeting = proj.project_details.meeting_logs.reduce((latest, current) => {
                                    const latestDate = new Date(latest.meeting_details.date);
                                    const currentDate = new Date(current.meeting_details.date);
                                    return latestDate > currentDate ? latest : current;
                                }, proj.project_details.meeting_logs[0]);

                                return (
                                    <tr key={projectIndex} className={`${styles.tablerow} ${styles.row}`}>
                                        <td className={styles.tablecell}>{proj.project_name}</td>
                                        <td className={styles.tablecell}>
                                            <div className={styles.detailsContainer}>
                                                <p>Date:</p> {latestMeeting.meeting_details.date}<br />
                                            </div>
                                            <div className={styles.detailsContainer}>
                                                <p>Venue:</p> {latestMeeting.meeting_details.venue}<br />
                                            </div>
                                            <div className={styles.detailsContainer}>
                                                <p>Attendees:</p> {latestMeeting.meeting_details.attendance.join(', ')}<br />
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                    ) : (
                        filteredData
                            .filter(row =>
                                row.meeting_name.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                            .map((row, rowIndex) => {
                                return (
                                    <tr key={rowIndex} className={`${styles.tablerow} ${styles.row}`}>
                                        <td className={styles.tablecell}>{row.meeting_name}</td>
                                        <td className={styles.tablecell}>
                                            <div className={styles.detailsContainer}>
                                                <p>Date:</p> {row.meeting_details.date}<br />
                                            </div>
                                            <div className={styles.detailsContainer}>
                                                <p>Venue:</p> {row.meeting_details.venue}<br />
                                            </div>
                                            <div className={styles.detailsContainer}>
                                                <p>Attendees:</p> {row.meeting_details.attendance.join(', ')}<br />
                                            </div>
                                        </td>
                                    </tr>
                                );
                            }))
                    }
                </tbody>
            </table>
            {filteredData.length === 0 && (!filteredProjects || filteredProjects.length === 0) &&
                searchTerm.trim().length > 0 && (
                    <div>{noDataComponent}</div>
                )}

        </div>
    );
};

export default Meeting;